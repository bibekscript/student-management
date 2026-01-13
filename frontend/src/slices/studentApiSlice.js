import { STUDENT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: () => ({
        url: STUDENT_URL,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Student"],
    }),

    getStudentById: builder.query({
      query: (id) => ({
        url: `${STUDENT_URL}/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Student"],
    }),

    createStudent: builder.mutation({
      query: (data) => ({
        url: STUDENT_URL,
        method: "POST",
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Student"],
    }),

    updateStudent: builder.mutation({
      query: () => ({
        url: `${STUDENT_URL}/${ID}`,
        method: "PUT",
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `${STUDENT_URL}/${id}`,
        method: ["DELETE"],
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentApiSlice;
