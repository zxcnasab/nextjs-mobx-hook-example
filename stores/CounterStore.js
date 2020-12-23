import { observable } from "mobx";
import { useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

export function createCounterStore() {
    return {
        count: 0,
        addCount() {
            this.count++
        },
        removeCount() {
            this.count--
        }
    }
}

const CounterStoreContext = createContext()

export const CounterProvider = ({ children }) => {
    const counterStore = useLocalObservable(createCounterStore)
    return (
        <CounterStoreContext.Provider value={counterStore}>
            {children}
        </CounterStoreContext.Provider>
    )
}

export const useCounterStore = () => useContext(CounterStoreContext)