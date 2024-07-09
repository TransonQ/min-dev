// 定义函数 `generateArray`，可以接受两种形式的第二个参数
export function generateArray<T>(
  length: number,
  itemOrCallback: T | ((i: number) => T)
): T[] {
  // 使用 Array.from 创建指定长度的数组，并根据第二个参数的类型进行处理
  return Array.from(
    { length },
    (_, i) =>
      typeof itemOrCallback === "function"
        ? (itemOrCallback as (i: number) => T)(i) // 如果第二个参数是函数，调用该函数生成数组元素
        : itemOrCallback // 否则，直接使用该元素
  );
}

// 示例用法：

// // 情况一：第二个参数是一个具体的元素
// const array1 = generateArray(5, 'a')
// console.log(array1) // 输出: ['a', 'a', 'a', 'a', 'a']

// // 情况二：第二个参数是一个回调函数
// const array2 = generateArray<{ id: number; name?: string }>(5, (i) => ({
//   id: i,
// }))
// console.log(array2) // 输出: [ { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
