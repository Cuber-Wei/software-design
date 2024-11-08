<template>
  <div id="ViewQuestionsView">
    <a-row :gutter="[24, 24]">
      <a-col :md="12" :xs="24">
        <a-tabs default-active-key="question" position="left">
          <a-tab-pane key="question" title="题目">
            <div class="docArea">
              <a-card
                v-if="question"
                :bordered="false"
                :title="question.title"
                style="margin-top: 10px; height: 95%; flex: 1"
              >
                <template #extra>
                  <a-space wrap>
                    <a-tag
                      v-for="(item, index) of question.tags"
                      :key="index"
                      color="green"
                      >{{ item }}
                    </a-tag>
                  </a-space>
                </template>
                <a-descriptions
                  :column="{ xs: 1, md: 2, lg: 3 }"
                  title="判题信息"
                >
                  <a-descriptions-item label="时间限制">
                    <a-tag>{{ question.judgeConfig.timeLimit }} ms</a-tag>
                  </a-descriptions-item>
                  <a-descriptions-item label="内存限制">
                    <a-tag>{{ question.judgeConfig.memoryLimit }} KB</a-tag>
                  </a-descriptions-item>
                  <a-descriptions-item label="堆栈限制">
                    <a-tag>{{ question.judgeConfig.stackLimit }} KB</a-tag>
                  </a-descriptions-item>
                </a-descriptions>
                <MdViewer :value="question.content || ' '" />
              </a-card>
            </div>
          </a-tab-pane>
          <a-tab-pane key="answer" title="题解">
            <h2>题目题解</h2>
            <MdEditor
              :handle-change="onContentChange"
              :value="writeup.content || ' '"
              class="formItem"
            />
            <a-button
              style="margin-top: 16px"
              type="primary"
              @click="doCommentSubmit"
              >提交
            </a-button>
            <a-divider />
            <WriteUpCard />
          </a-tab-pane>
          <a-tab-pane key="submits" title="提交记录">提交记录</a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :md="12" :xs="24" class="codeArea">
        <a-row :column="{ xs: 1, md: 2 }" class="operationLine">
          <a-col :span="8">
            <a-cascader
              v-model="form.language"
              :options="languageOptions"
              placeholder="请选择代码语言"
              style="width: 100%"
            />
          </a-col>
          <a-col :span="8" style="margin-left: 20px">
            <a-button style="width: 200px" type="primary" @click="doSubmit"
              >提交代码
            </a-button>
          </a-col>
        </a-row>
        <CodeEditor
          ref="monacoEdit"
          :handle-change="onCodeChange"
          :language="form.language"
          :readonly="false"
          :value="form.code"
          style="height: 95%; flex: 1"
        ></CodeEditor>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, onMounted, ref, withDefaults } from "vue";
import message from "@arco-design/web-vue/es/message";
import {
  PostAddRequest,
  QuestionAddRequest,
  QuestionControllerService,
  QuestionSubmitAddRequest,
  QuestionSubmitControllerService,
} from "../../../generated";
import CodeEditor from "@/components/CodeEditor.vue";
import MdViewer from "@/components/MdViewer.vue";
import WriteUpCard from "@/components/WriteUpCard.vue";
import MdEditor from "@/components/MdEditor.vue";

const question = ref<QuestionAddRequest>();
const writeup = ref({
  content: "# 贡献题解...",
} as PostAddRequest);
const languageOptions = [
  {
    value: "java",
    label: "Java",
  },
  {
    value: "cpp",
    label: "C++",
  },
  {
    value: "python",
    label: "Python3",
  },
  {
    value: "golang",
    label: "Golang",
  },
];

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});

const loadData = async () => {
  const res = await QuestionControllerService.getQuestionVoByIdUsingGet(
    props.id as string
  );
  if (res.code === 0) {
    question.value = res.data;
    // writeup.value.questionId = question.value.id;
  } else {
    message.error("加载失败！ " + res.message);
  }
};
onMounted(() => {
  loadData();
});

const form = ref<QuestionSubmitAddRequest>({
  language: "java",
  code: "",
});
const onCodeChange = (v: string) => {
  form.value.code = v;
};
const doSubmit = async () => {
  if (props.id !== "" && form.value.code !== "") {
    const res = await QuestionSubmitControllerService.doQuestionSubmitUsingPost(
      {
        ...form.value,
        questionId: props.id,
      }
    );
    if (res.code === 0) {
      message.success("提交成功！");
    } else {
      message.error("提交失败！ " + res.message);
    }
  }
};
</script>
<style>
#ViewQuestionsView {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

#ViewQuestionsView .arco-space-horizontal .arco-space-item {
  margin-bottom: 0 !important;
}

#ViewQuestionsView .arco-card .arco-card-size-medium .arco-card-bordered {
  height: 100% !important;
}

#ViewQuestionsView .operationLine {
  margin: 10px 0;
  height: 32px;
  width: 100%;
}

#ViewQuestionsView .docArea {
  position: relative;
  height: calc(100vh - 160px - 2rem);
  max-height: calc(100vh - 160px - 2rem);
  overscroll-behavior: contain;
  overflow: auto;
}

#ViewQuestionsView .codeArea {
  position: relative;
  height: calc(100vh - 160px - 2rem);
  max-height: calc(100vh - 160px - 2rem);
  overflow: hidden;
}
</style>
