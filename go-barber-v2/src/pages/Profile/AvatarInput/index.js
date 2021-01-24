import { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "../../../services/api";

import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPeview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file",
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data;

    setFile(id);
    setPeview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            "https://i1.wp.com/www.solosagrado.com.br/blog/site/wp-content/uploads/2015/06/Qual-%C3%A9-o-Link-mais-poderoso-em-Legend-of-Zelda-e1434486782348.jpg?fit=640%2C512&ssl=1"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
