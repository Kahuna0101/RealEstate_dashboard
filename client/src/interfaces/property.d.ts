import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    propertyType: string,
    propertyStatus: string,
    location: string,
    gateHouse: string,
    baths: string,
    rooms: string,
    area: string,
    price: number | undefined,
    legalDoc: string,
    structuralDrawing: string,
    surveyPrice: string,
    certificationFee: string,
    devFee: string,
    meFeeDuplex: string,
    meFeeBungalow: string,
    archFeeDuplex: string,
    archFeeBungalow: string,
    approvalBungalow: string,
    approvalDuplex: string,
}

export interface PropertyCardProps {
  id?: BaseKey | undefined,
  title: string,
  location: string,
  price: string,
  photo: string,
  date: string,
}
