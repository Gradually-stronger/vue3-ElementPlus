<template>
  <div class="containers auto-width">
    <el-backtop target=".containers"></el-backtop>
    <ul class="menu" v-show="isMenu">
      <li>WorkSpace</li>
      <li>Life</li>
      <li>Q&A</li>
      <li>Other</li>
    </ul>
    <div class="slogn">
      <p>
        努力一直是平凡的人活着的勇气,如果你不努力,那你只是一具尸体. <br />
        Efforts have always been the courage of ordinary people to live. If you
        don't work hard, you are just a corpse.
      </p>
      <el-image class="slogn-logo" src="/image/teaching.png"></el-image>
    </div>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <div v-infinite-scroll="getlist" class="list" :infinite-scroll-immediate="false"
        :infinite-scroll-disabled="disabled">
        <div v-for="item in datalist" :key="item.id" class="list">
          <div class="item" @click="detail(item)">
            <div class="title">{{ item.title || '没有标题' }}</div>
            <div class="time">
              {{
                item.created_at &&
                dayjs(item.created_at).format('YYYY-MM-DD HH:mm')
              }}
            </div>
          </div>
          <div class="content">
            {{ item.intro }}
          </div>
        </div>
      </div>
      <p style="height: 50px;line-height: 50px;" v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </div>
  </div>
</template>

<script lang="ts">
import { getAll } from '@/axios/request';
import { homelist } from '@/interpreter/home';
import { debounce } from '@/until/modes';
import { dayjs } from 'element-plus';
import { useRouter } from 'vue-router';
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  onUnmounted,
  computed,
} from 'vue';

export default defineComponent({
  setup() {
    let isMenu = ref(false);
    let isData = ref(false);
    let pagination = reactive({
      limit: 20,
      offset: 0,
    });
    const router = useRouter();
    const loading = ref(false);
    const noMore = computed(() => isData.value);
    const disabled = computed(() => loading.value || noMore.value)
    let datalist = ref<homelist[]>([]);
    const remove = () => {
      if (!isMenu.value) {
        isMenu.value = true;
      }

      if (window.scrollY === 0 && isMenu.value) {
        isMenu.value = false;
      }
    };

    onMounted(() => {
      getlist();
      window.addEventListener('scroll', remove);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', remove);
    });

    const handlePagination = () => {
      pagination = {
        limit: pagination.limit,
        offset: pagination.limit + pagination.offset,
      };
    };

    const getlist = debounce(() => {
      loading.value = true;

      getAll(pagination).then((res: any) => {
        const { list, total_count } = res;
        loading.value = false;
        if (res.code > 300) {
        } else {
          if (total_count === 0) {
            isData.value = true;
            return;
          }
          if (total_count < pagination.limit) {
            isData.value = true;
          }
          datalist.value = datalist.value.concat(list);
          handlePagination();
        }
      });
    }, 1000);

    const detail = (item: homelist) => {
      const { record_id } = item;
      router.push({
        path: '/article/detail',
        query: {
          id: record_id,
        },
      });
    };

    return {
      isMenu,
      onUnmounted,
      onMounted,
      loading,
      noMore,
      getlist,
      datalist,
      dayjs,
      detail,
      disabled,
    };
  },
});
</script>

<style scoped lang="less">
.containers {
  .menu {
    width: 100px;
    list-style: none;
    position: fixed;
    left: 10%;
    top: 100px;
    text-align: right;

    li {
      cursor: pointer;
      line-height: 30px;
      font-size: 18px;
      font-weight: 300;
      color: --el-color-dark-context;

      &:hover {
        color: #409eff;
      }
    }
  }

  .infinite-list-wrapper {
    height: 300px;
    text-align: center;

    .list {
      margin: 10px 0;

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        .title {}

        .time {}
      }

      .content {}
    }
  }

  .slogn {
    font-size: 14px;
    color: --el-color-dark-context;
    border-radius: 3px;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(45deg, #0072f5 -20%, #ff4ecd 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    // box-shadow: -1px 2px 10px rgb(34, 178, 92);
    // background: linear-gradient(90deg,
    //     rgb(66, 111, 183),
    //     rgb(33, 141, 33),
    //     rgb(190, 168, 58));
    p:first-of-type {
      width: 500px;
    }

    &-logo {
      width: 400px;
    }
  }
}
</style>
