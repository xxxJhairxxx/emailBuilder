import React, { useState } from "react";

import {
  VerticalAlignBottomOutlined,
  VerticalAlignCenterOutlined,
  VerticalAlignTopOutlined,
} from "@mui/icons-material";
import { Box, Slider, ToggleButton, Typography } from "@mui/material";
import { ImageProps, ImagePropsSchema } from "@usewaypoint/block-image";
import HeightSharpIcon from "@mui/icons-material/HeightSharp";
import BaseSidebarPanel from "./helpers/BaseSidebarPanel";
import RadioGroupInput from "./helpers/inputs/RadioGroupInput";
import TextInput from "./helpers/inputs/TextInput";
import MultiStylePropertyPanel from "./helpers/style-inputs/MultiStylePropertyPanel";
import SliderInput from "./helpers/inputs/SliderInput";

type ImageSidebarPanelProps = {
  data: ImageProps;
  setData: (v: ImageProps) => void;
};
export default function ImageSidebarPanel({
  data,
  setData,
}: ImageSidebarPanelProps) {
  const [, setErrors] = useState<Zod.ZodError | null>(null);

  const updateData = (d: unknown) => {
    const res = ImagePropsSchema.safeParse(d);
    if (res.success) {
      setData(res.data);
      setErrors(null);
    } else {
      setErrors(res.error);
    }
  };

  return (
    <BaseSidebarPanel title="Image block">
      <TextInput
        label="Source URL"
        defaultValue={data.props?.url ?? ""}
        onChange={(v) => {
          const url = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, url } });
        }}
      />

      <TextInput
        label="Alt text"
        defaultValue={data.props?.alt ?? ""}
        onChange={(alt) =>
          updateData({ ...data, props: { ...data.props, alt } })
        }
      />
      <TextInput
        label="Click through URL"
        defaultValue={data.props?.linkHref ?? ""}
        onChange={(v) => {
          const linkHref = v.trim().length === 0 ? null : v.trim();
          updateData({ ...data, props: { ...data.props, linkHref } });
        }}
      />

      <SliderInput
        iconLabel={<HeightSharpIcon className="rotate-90" />}
        units="px"
        step={1}
        marks
        min={100}
        max={600}
        label="Width"
        defaultValue={data.props?.width ?? 600}
        onChange={(width) =>
          updateData({ ...data, props: { ...data.props, width } })
        }
      />
      <SliderInput
        iconLabel={<HeightSharpIcon />}
        units="px"
        step={1}
        marks
        min={100}
        max={400}
        label="Height"
        defaultValue={data.props?.height ?? 400}
        onChange={(height) =>
          updateData({ ...data, props: { ...data.props, height } })
        }
      />

      <RadioGroupInput
        label="Alignment"
        defaultValue={data.props?.contentAlignment ?? "middle"}
        onChange={(contentAlignment) =>
          updateData({ ...data, props: { ...data.props, contentAlignment } })
        }
      >
        <ToggleButton value="top">
          <VerticalAlignTopOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="middle">
          <VerticalAlignCenterOutlined fontSize="small" />
        </ToggleButton>
        <ToggleButton value="bottom">
          <VerticalAlignBottomOutlined fontSize="small" />
        </ToggleButton>
      </RadioGroupInput>

      <MultiStylePropertyPanel
        names={["backgroundColor", "textAlign", "padding"]}
        value={data.style}
        onChange={(style) => updateData({ ...data, style })}
      />
    </BaseSidebarPanel>
  );
}
