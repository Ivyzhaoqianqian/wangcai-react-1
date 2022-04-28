import { useState } from "react";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(['衣', '食', '住', '行']);
    return { tags, setTags };
};

export { useTags };