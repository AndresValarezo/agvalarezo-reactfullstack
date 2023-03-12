import { Task } from "@/interfaces/Task";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/task/${id}`);

export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/newTask", task);

export const updateTask = async (
  id: string,
  newTask: Task
): Promise<AxiosResponse<Task>> => await axios.put(`/task/${id}`, newTask);

export const deleteTask = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/task/${id}`);
