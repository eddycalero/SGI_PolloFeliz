

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fakeData } from './makeData';

export function useUserCrud() {
  const queryClient = useQueryClient();

  const useGetUsers = () =>
    useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        await new Promise((r) => setTimeout(r, 500)); // simula una llamada a API
        return fakeData;
      },
      refetchOnWindowFocus: false,
    });

  const useCreateUser = () =>
    useMutation({
      mutationFn: async (user) => {
        await new Promise((r) => setTimeout(r, 300));
        return user;
      },
      onMutate: (newUser) => {
        queryClient.setQueryData(['users'], (prev = []) => [
          ...prev,
          { ...newUser, id: crypto.randomUUID() },
        ]);
      },
    });

  const useUpdateUser = () =>
    useMutation({
      mutationFn: async (user) => {
        await new Promise((r) => setTimeout(r, 300));
        return user;
      },
      onMutate: (updatedUser) => {
        queryClient.setQueryData(['users'], (prev = []) =>
          prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
      },
    });

  const useDeleteUser = () =>
    useMutation({
      mutationFn: async (id) => {
        await new Promise((r) => setTimeout(r, 300));
        return id;
      },
      onMutate: (id) => {
        queryClient.setQueryData(['users'], (prev = []) =>
          prev.filter((u) => u.id !== id)
        );
      },
    });

  return { useGetUsers, useCreateUser, useUpdateUser, useDeleteUser };
}
