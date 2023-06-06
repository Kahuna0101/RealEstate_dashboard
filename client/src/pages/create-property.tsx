import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";

import Form from "components/common/Form";

const CreateProperty = () => {
  const { data: user } = useGetIdentity();
  const [ propertyImages, setPropertyImages ] = useState<{ name: string; url: string }[]>([]);
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  console.log(propertyImages); 

  const handleImageChange = (files: FileList) => {
    const readers = Array.from(files).map((file) => {
      return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(file);
      });
    });
  
    Promise.all(readers).then((results: string[]) => {
      const newImages = Array.from(files).map((file, index) => ({
        name: file.name,
        url: results[index],
      }));
      setPropertyImages((prevImages) => [...prevImages, ...newImages]);
    });
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (propertyImages.length === 0) return alert('Please select at least one image');
  
    await onFinish({
      ...data,
      images: propertyImages.map((image) => image.url),
      email: user.email,
    });
    
  };


  return (
    <Form
    type="Create"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    handleImageChange={handleImageChange}
    onFinishHandler={onFinishHandler}
    propertyImages={propertyImages}
  />  
  )
}

export default CreateProperty;