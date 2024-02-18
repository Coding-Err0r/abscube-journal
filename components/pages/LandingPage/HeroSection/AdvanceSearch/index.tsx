"use client";

import { data } from "@/config/data";
import { SearchIcon } from "lucide-react";
import React from "react";
import {
  SelectPicker,
  TagInput,
  DateRangePicker,
  Input,
  InputGroup,
} from "rsuite";

const topics = data.researchTopics.map((item) => ({
  label: item,
  value: item,
}));

const issues = data.issues.map((item) => ({
  label: item,
  value: item,
}));

const volumes = data.volumes.map((item) => ({
  label: item,
  value: item,
}));

const AdvanceSearch = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl my-12 order-1">
      <InputGroup inside className="w-full">
        <Input />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <TagInput className="w-full" placeholder="Tag input" />
      <DateRangePicker
        appearance="default"
        placeholder="Select Date"
        className="w-full"
      />
      <div className="grid grid-cols-3 gap-4">
        <SelectPicker
          data={topics}
          style={{ width: 224 }}
          placeholder="Research Topics"
        />
        <SelectPicker
          data={issues}
          style={{ width: 224 }}
          placeholder="Issues"
        />
        <SelectPicker
          data={volumes}
          style={{ width: 224 }}
          placeholder="Volumes"
        />
      </div>
      <button className="w-full text-white bg-emerald-500 p-4 rounded-lg text-lg font-semibold">
        Search
      </button>
    </div>
  );
};

export default AdvanceSearch;
