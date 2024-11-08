<template>
  <div id="ManagePostView">
    <h1>管理帖子</h1>
    <a-table
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
      }"
      @page-change="onPageChange"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)">修改</a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </a-space>
      </template>
    </a-table>
    <a-space
      >每页帖子数量
      <a-input-number
        v-model="searchParams.pageSize"
        min="1"
        placeholder="每页帖子数量"
        size="large"
      />
    </a-space>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import { Post, PostControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const show = ref(true);

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  current: 1,
});

const loadData = async () => {
  const res = await PostControllerService.listPostByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("加载数据失败！ " + res.message);
  }
};

onMounted(() => {
  loadData();
});
// 监听分页变量，改变时更新页面
watchEffect(() => {
  loadData();
});

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "帖子内容",
    dataIndex: "content",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "评论数",
    dataIndex: "commentNum",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
  },
  {
    title: "创建用户id",
    dataIndex: "userId",
  },
  {
    title: "创建用户",
    dataIndex: "userVO",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];
const router = useRouter();
const doUpdate = (post: Post) => {
  router.push({
    path: "/update/post",
    query: {
      id: post.id,
    },
  });
};
const doDelete = async (post: Post) => {
  const res = await PostControllerService.deletePostUsingPost({
    id: post.id,
  });
  if (res.code === 0) {
    // 更新页面
    message.success("删除帖子成功！");
    await loadData();
  } else {
    message.error("删除帖子失败！ " + res.message);
  }
};
const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};
</script>
<style scoped>
#ManagePostView {
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
}
</style>
