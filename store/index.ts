import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing
import AsyncStorage from '@react-native-async-storage/async-storage'

interface BearState {
    counter: number
    increment: (by: number) => void
}

const useStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        counter: 0,
        increment: (by) => set((state) => ({ counter: state.counter + by })),
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage)
      },
    ),
  ),
)
export default useStore