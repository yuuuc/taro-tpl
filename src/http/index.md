# Http 网络

提供基本的 request 请求方法

# 模块目录

如需扩展目录结构请在文档中说明，并更新文档

```
├─http // 项目代码目录
| ├─index.ts // 模块入口
| ├─http.ts // 提供的主要功能
| ├─types.ts // 类型定义
| ├─expand.ts // 扩展代码
```

# 扩展代码(expand.ts)

- 如需定义扩展代码使用 export 进行导出方法
- 添加扩展代码后统一在 index.ts 文件中导出

```typescript
/**
 * 基本描述
 * 如涉及复杂代码请简述代码思路
 */
export const xxx = () => {};
```

# 注意

- 不能直接调用 http.ts 的 baseUrl 进行使用，需通过 expand 进行处理后使用
