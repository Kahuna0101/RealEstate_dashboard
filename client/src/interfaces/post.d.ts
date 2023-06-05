import { BaseKey } from '@pankod/refine-core';

export interface PostFieldProp {
  title: string,
  labelName: string
}

export interface PostValues {
    title: string,
    body: string,
    tags: string,
}

export interface PostCardProps {
  id?: BaseKey | undefined,
  title: string,
  body: string,
  tags: string,
  photo: string,
  date: string,
}
