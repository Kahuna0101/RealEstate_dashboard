import { useState } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValues, useForm } from '@pankod/refine-react-hook-form';

import Form from 'components/common/Form';

const CreateProperty = () => {
  const { data: user } = useGetIdentity();
  const [ propertyImages, setPropertyImages ] = useState<{ name: string; url: string }[]>([]);
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

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
    type="Edit"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    handleImageChange={handleImageChange}
    onFinishHandler={onFinishHandler}
    propertyImages={propertyImages}
/>  
  );
};

export default CreateProperty;

/* 

import { useState } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValues, useForm } from '@pankod/refine-react-hook-form';

import Form from 'components/common/Form';

const CreateProperty = () => {
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({ name: '', url: '' });
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    reader(file).then((result: string) => setPropertyImage({ name: file?.name, url: result }));
  };

  const onFinishHandler = async (data: FieldValues) => {
    if (!propertyImage.name) return alert('Please upload a property image');

    await onFinish({ ...data, photo: propertyImage.url, email: user.email });
  };

  return (
    <Form
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  );
};

export default CreateProperty;
*/