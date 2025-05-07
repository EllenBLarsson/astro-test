"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainButton.module.css";

export function MainButton({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{"Get started"}</_Builtin.Block>
    </_Component>
  );
}
