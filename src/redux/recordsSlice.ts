import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Job {
  id: number;
  title: string;
  detail: string;
  link: string;
  summary: string | null;
  note: string | null;
  added_at: Date;
  company_id: number;
  recruiter_id: number;
}

export interface Company {
  id: number;
  name: string;
  about: string | null;
  link: string;
  summary: string | null;
  note: string | null;
  added_at: Date;
}

export interface Recruiter {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  note: string | null;
  added_at: Date;
  comp_id: number;
}

interface StoreState {
  jobs: Job[];
  companies: Company[];
  recruiters: Recruiter[];
  status: "loading" | "success" | "failed" | null;
}

type TableType = "job" | "company" | "recruiter";
export type RecordType = Job | Company | Recruiter;

const initialState: StoreState = {
  jobs: [],
  companies: [],
  recruiters: [],
  status: null,
};

const jobColumns = [
  "id",
  "title",
  "detail",
  "link",
  "summary",
  "note",
  "added_at",
  "company_id",
  "recruiter_id",
];

const companyColumns = [
  "id",
  "name",
  "about",
  "link",
  "summary",
  "note",
  "added_at",
];

const recruiterColumns = [
  "id",
  "name",
  "email",
  "phone",
  "note",
  "added_at",
  "comp_id",
];

export const getColumns = (table: TableType) => {
  switch (table) {
    case "job":
      return jobColumns;
    case "company":
      return companyColumns;
    default:
      return recruiterColumns;
  }
};

export const formatRecords = (table: TableType, records: [][]) => {
  const columnNames = getColumns(table);
  return records.map((record: any) =>
    record.reduce((acc: any, currValue: any, currIdx: number) => {
      return { ...acc, [columnNames[currIdx]]: currValue };
    }, {})
  );
};

export const fetchAll = createAsyncThunk("records/fetchAll", async () => {
  const jobRes = await fetch(`${process.env.REACT_APP_SERVER_URL}/job`);
  const companyRes = await fetch("http://localhost:5000/company");
  const recruiterRes = await fetch("http://localhost:5000/recruiter");
  return {
    job: await jobRes.json(),
    company: await companyRes.json(),
    recruiter: await recruiterRes.json(),
  };
});

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    readAll(state, action: PayloadAction<string>) {
      //   switch (action.payload) {
      //   case "job":
      //     return state.jobs;
      //   case "company":
      //     return state.companies;
      //   case "recruiters":
      //     return state.recruiters;
      //   default:
      //     return;
      // }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = "success";
        state.jobs = formatRecords("job", action.payload.job);
        state.companies = formatRecords("company", action.payload.company);
        state.recruiters = formatRecords("recruiter", action.payload.recruiter);
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { readAll } = recordsSlice.actions;

export default recordsSlice.reducer;
