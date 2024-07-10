import { generateArray } from "@transon/tools";

export type MockOptions = {
  label: string;
  value: string;
};

export const mockOptions: MockOptions[] = generateArray<MockOptions>(10, (i) => ({
  label: `Option_${i}`,
  value: i.toString(),
}));
