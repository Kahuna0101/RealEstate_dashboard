export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: () => void
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    properties: Array | undefined,
    posts: Array | undefined
}

export interface PostsProps {
    _id: string,
    title: string,
    body: string,
    tags: string,
    photo: string,
    date: string
}

export interface PropertyProps {
    _id: string,
    title: string,
    description: string,
    location: string,
    price: string,
    photo: string,
    gateHouse: string,
    baths: string,
    rooms: string,
    area: string,
    video: string,
    panorama: string,
    creator: string,
    images: string,
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
    date: string,
}

export interface FormProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    handleImageChange: (file) => void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    propertyImages: { name: string; url: string }[],
}

export interface PostProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    handleImageChange: (file) => void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    postImage: { name: string, url: string },
}
