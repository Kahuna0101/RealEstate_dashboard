/* eslint-disable no-plusplus */
import { FormValues } from 'interfaces/property';

export const validateForm = (formValues: FormValues) => {
  const errors: { message: string } = { message: '' };
  let hasError = false;

  Object.keys(formValues).forEach((key) => {
    switch (key) {
      case 'title':
        if (!formValues.title) {
          errors.message = 'Title is required';
          hasError = true;
        }
        break;

      case 'description':
        if (!formValues.description) {
          errors.message = 'Description is required';
          hasError = true;
        }
        break;

      case 'propertyType':
        if (!formValues.propertyType) {
          errors.message = 'Property type is required';
          hasError = true;
        }
        break;

      case 'propertyStatus':
        if (!formValues.propertyStatus) {
          errors.message = 'Property Status is required';
          hasError = true;
        }
        break;

      case 'location':
        if (!formValues.location) {
          errors.message = 'Location is required';
          hasError = true;
        }
        break;

      case 'price':
        if (!formValues.price) {
          errors.message = 'Price is required';
          hasError = true;
        }
        break;

      case 'gateHouse':
        if (!formValues.gateHouse) {
          errors.message = 'GateHouse is required';
          hasError = true;
        }
        break;

      case 'baths':
        if (!formValues.baths) {
          errors.message = 'Baths is required';
          hasError = true;
        }
        break;

      case 'rooms':
        if (!formValues.rooms) {
          errors.message = 'Rooms is required';
          hasError = true;
        }
        break;

      case 'area':
        if (!formValues.area) {
          errors.message = 'Area is required';
          hasError = true;
        }
        break;

      case 'legalDoc':
        if (!formValues.legalDoc) {
          errors.message = 'Legal Documentation Price is required';
          hasError = true;
        }
        break;

      case 'structuralDrawing':
        if (!formValues.structuralDrawing) {
          errors.message = 'Structural Drawing Price is required';
          hasError = true;
        }
        break;

      case 'surveyPrice':
        if (!formValues.surveyPrice) {
          errors.message = 'Survey Plan Price is required';
          hasError = true;
        }
        break;

      case 'certificationFee':
        if (!formValues.certificationFee) {
          errors.message = 'Stage Certification Fee is required';
          hasError = true;
        }
        break;

      case 'devFee':
        if (!formValues.devFee) {
          errors.message = 'Infrastructure/Development Fee is required';
          hasError = true;
        }
        break;

      case 'meFeeDuplex':
        if (!formValues.meFeeDuplex) {
          errors.message = 'M & E Drawing Fee for Duplex is required';
          hasError = true;
        }
        break;

      case 'meFeeBungalow':
        if (!formValues.meFeeBungalow) {
          errors.message = 'M & E Drawing Fee for Bungalow is required';
          hasError = true;
        }
        break;

      case 'archFeeDuplex':
        if (!formValues.archFeeDuplex) {
          errors.message = 'Architectural Fee for Duplex is required';
          hasError = true;
        }
        break;

      case 'archFeeBungalow':
        if (!formValues.archFeeBungalow) {
          errors.message = 'Architectural Fee for Bungalow is required';
          hasError = true;
        }
        break;

      case 'approvalBungalow':
        if (!formValues.approvalBungalow) {
          errors.message = 'Building Approval Fee for Bungalow is required';
          hasError = true;
        }
        break;

      case 'approvalDuplex':
        if (!formValues.approvalDuplex) {
          errors.message = 'Building Approval Fee for Duplex is required';
          hasError = true;
        }
        break;

      default:
        hasError = false;
    }
  });

  return { hasError, errors };
};

export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
  const initialValuesArray = Object.values(initialValues);
  const currentValuesArray = Object.values(currentValues);
  for (let i = 0; i < initialValuesArray.length; i++) {
    if (initialValuesArray[i] !== currentValuesArray[i]) {
      return true;
    }
  }
  return false;
};
