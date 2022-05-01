import { type } from "os"
import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"


export type RecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    // createAt: string;
}

type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('record') || '[]'))
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('record', JSON.stringify(records));

    }, [records]);

    const addRecord = (newrecord: RecordItem) => {
        if (newrecord.amount <= 0) {
            alert('请输入金额')
        };
        if (newrecord.tagIds.length === 0) {
            alert('请选择标签');
            return false;
        }
        const record = { ...newrecord, createAt: (new Date()).toISOString() }
        setRecords([...records, record]);
        return true;
    };



    return { records, addRecord }
};