import { type SchemaTypeDefinition } from 'sanity';
import { locationType } from './location';
import { serviceType } from './service';
import { formType } from './form';
import { formSubmissionType } from './formSubmission';
import { callRailType } from './callRail';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [locationType, serviceType, formType, formSubmissionType, callRailType],
};
