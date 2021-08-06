# Таск раннер для проверки домашних заданий

Для запуска нужнен nodejs версии не ниже 14

Инсталяция

```bash
npm install
```

Для проверки задания достаточно скопировать папку с набором тесткейсов и файла с решением.
Файл с решением должен иметь название solution.ts


![Пример с решением](./documentation/solution_example.png)

```typescript
export default (a: string): string => {
  return a.length.toString();
}
```

Запуск тестов

```bash
npx jest
```

Пример вывода тестов

![Пример выводом результатов](./documentation/run_example.png)
