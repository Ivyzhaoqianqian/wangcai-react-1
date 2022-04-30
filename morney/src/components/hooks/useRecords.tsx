import { type } from "os"
import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"


type RecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    createAt: string;
}

type newRecordItem = Omit<RecordItem, 'createAt' | 'updateAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('record') || '[]'))
    }, [records])

    const addRecord = (newrecord: RecordItem) => {
        const record = { ...newrecord, createAt: (new Date()).toISOString() }
        setRecords([...records, record]);
    };

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])

    return { records, addRecord }
};