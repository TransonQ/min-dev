import { generateArray } from "@transon/tools";

export type MockTableData = {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

export const tableData: MockTableData[] = generateArray<MockTableData>(
  50,
  (i) => ({
    id: i.toString(),
    name: `John_Doe_${i}`,
    email: `john.doe${i}@example.com`,
    address: `Main_St_${i}`,
    city: `City_${i}`,
    state: `State_${i}`,
    zip: `zip_${i}`,
  })
);

