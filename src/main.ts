import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "./style.css";

console.log('[Main] 应用初始化开始');

const app = createApp(App);

// 全局错误处理
app.config.errorHandler = (err, instance, info) => {
  console.error('[App] 全局错误捕获:');
  console.error('[App] 错误:', err);
  console.error('[App] 组件:', instance);
  console.error('[App] 信息:', info);
};

// 全局警告处理
app.config.warnHandler = (msg, instance, trace) => {
  console.warn('[App] 全局警告:');
  console.warn('[App] 消息:', msg);
  console.warn('[App] 组件:', instance);
  console.warn('[App] 追踪:', trace);
};

// 捕获未处理的Promise错误
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Window] 未处理的Promise拒绝:', event.reason);
});

// 捕获全局错误
window.addEventListener('error', (event) => {
  console.error('[Window] 全局错误:', event.error);
});

app.use(pinia);
app.use(router);

app.mount("#app");

console.log('[Main] 应用挂载完成');
