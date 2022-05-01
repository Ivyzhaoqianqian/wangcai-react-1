import Layout from "../components/Layout";
import React, { useState } from "react";
import { CategorySection } from './Money/CategorySection'
import styled from "styled-components";
import { useRecords } from "../components/hooks/useRecords";
import { useTags } from "../components/hooks/useTags";
import day from "dayjs"

const CategoryWrapper = styled.div`
    background-color:white;
`

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:white;
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
    > .note{
        margin-right:auto;
        margin-left:16px;
        color:#999;
    }
`
const Header = styled.h3`
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const { records } = useRecords()
    const { getName } = useTags()
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                    onChange={value => setCategory(value)} />
            </CategoryWrapper>

            <div>
                {records.map(r => {
                    return <Item>
                        <div className="tags oneLine">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                            <hr />

                            {r.amount}
                            <hr />
                            {day(r.createAt).format('YYYY年MM月DD日')}

                        </div>
                    </Item>
                })}
            </div>
        </Layout>
    );
}

export default Statistics;