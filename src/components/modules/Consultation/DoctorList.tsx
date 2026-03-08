"use client";

import { getDoctors } from "@/app/(commonLayout)/consultation/_actions";
import { useQuery } from "@tanstack/react-query";

const DoctorList = () => {
  const { data } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctors(),
  });

  // const { data: nonPrefetched } = useQuery({
  //   queryKey: ["non-prefetched"],
  //   queryFn: () => getDoctors(),
  // });

  // console.log({ nonPrefetched });
  console.log({ data });
  return (
    <div>
      {data?.data?.map((doctor: any) => (
        <div key={doctor.id}>{doctor.name}</div>
      ))}
    </div>
  );
};

export default DoctorList;
