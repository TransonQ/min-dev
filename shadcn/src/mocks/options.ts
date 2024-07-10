import { generateArray } from "@transon/tools";

export type MockOptions = {
  label: string;
  value: string;
};

export const options: MockOptions[] = generateArray<MockOptions>(10, (i) => ({
  label: `Option_${i}`,
  value: i.toString(),
}));
