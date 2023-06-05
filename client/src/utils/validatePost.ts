/* eslint-disable no-plusplus */
import { PostValues } from "interfaces/post";

export const validatePost = (postValues: PostValues) => {
    const errors: { message: string } = { message: '' };
    let hasError = false;

    Object.keys(postValues).forEach((key) => {
        switch (key) {
            case 'title':
                if (!postValues.title) {
                    errors.message = 'Title is required';
                    hasError = true;
                }
                break;
                
            case 'body':
                if (!postValues.body) {
                    errors.message = 'Body is required';
                    hasError = true;
                }
                break;
                
            case 'tags':
                if (!postValues.tags) {
                    errors.message = 'Tags is required';
                    hasError = true;
                }
                break;

            default:
                hasError = false;
        }
    });

    return { hasError, errors };
};

export const hasChanged = (initialValues: PostValues, currentValues: PostValues) => {
    const initialValuesArray = Object.values(initialValues);
    const currentValuesArray = Object.values(currentValues);
    for (let i = 0; i < initialValuesArray.length; i++) {
      if (initialValuesArray[i] !== currentValuesArray[i]) {
        return true;
      }
    }
    return false;
  };