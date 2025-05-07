"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NumberList.module.css";

export function NumberList({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "metrics")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "layout-metrics")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2")}
            tag="h2"
            data-splitting=""
            data-effect2=""
          >
            {"Our numbers speak for themselves"}
          </_Builtin.Heading>
          <_Builtin.Grid
            className={_utils.cx(_styles, "layout-list-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "layout-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "h2")} tag="div">
                {"4.25%"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "paragraph")}
                tag="div"
              >
                {"Annual percentage yield"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "vertical-divider")}
              id={_utils.cx(
                _styles,
                "w-node-c880f7fb-4a23-cee8-c5ec-0dd704110b4c-04110b41"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "layout-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "h2")} tag="div">
                {"4.7/5"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "paragraph")}
                tag="div"
              >
                {"Customer satisfaction"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "vertical-divider")}
              id={_utils.cx(
                _styles,
                "w-node-c880f7fb-4a23-cee8-c5ec-0dd704110b52-04110b41"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "layout-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "h2")} tag="div">
                {"43K+"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "paragraph")}
                tag="div"
              >
                {"No-fee ATMs"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "vertical-divider")}
              id={_utils.cx(
                _styles,
                "w-node-c880f7fb-4a23-cee8-c5ec-0dd704110b58-04110b41"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "layout-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "h2")} tag="div">
                {"0%"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "paragraph")}
                tag="div"
              >
                {"Commission for bonds"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "bg-gradient", "right")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6814410621c8c44b4747d77c/6814410721c8c44b4747d8be_Background%20Gradient.svg"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "bg-gradient")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6814410621c8c44b4747d77c/6814410721c8c44b4747d8be_Background%20Gradient.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
