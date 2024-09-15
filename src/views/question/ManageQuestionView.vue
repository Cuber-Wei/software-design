<template>
  <div id="ManageQuestionView">
    <h1>管理题目</h1>
    <a-table
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.pageNum,
        total,
      }"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)">修改</a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Question, QuestionControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const show = ref(true);

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  pageNum: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
    console.log(res.data);
  } else {
    message.error("加载数据失败！ ", res.message);
  }
};

onMounted(() => {
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
    title: "题目描述",
    dataIndex: "content",
  },
  {
    title: "参考答案",
    dataIndex: "answer",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "提交数",
    dataIndex: "submitNum",
  },
  {
    title: "通过数",
    dataIndex: "acceptedNum",
  },
  {
    title: "点赞数",
    dataIndex: "thumbNum",
  },
  {
    title: "收藏数",
    dataIndex: "favourNum",
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
    title: "题目配置",
    dataIndex: "judgeConfig",
  },
  {
    title: "测试用例",
    dataIndex: "judgeCase",
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
    title: "是否下线",
    dataIndex: "isDelete",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];
const router = useRouter();
const doUpdate = (question: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    // 更新页面
    message.success("删除题目成功！");
    await loadData();
  } else {
    message.error("删除题目失败！ " + res.message);
  }
};
</script>
<style scoped>
#ManageQuestionView {
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
}
</style>
