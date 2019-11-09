declare module 'fastest-validator' {
	/**
	 * Type of all possible Built-in validators names
	 */
	type ValidationRuleName =
		'any'
		| 'array'
		| 'boolean'
		| 'custom'
		| 'date'
		| 'email'
		| 'enum'
		| 'equal'
		| 'forbidden'
		| 'function'
		| 'luhn'
		| 'mac'
		| 'multi'
		| 'number'
		| 'object'
		| 'string'
		| 'url'
		| 'uuid';

	/**
	 * Validation schema definition for "any" built-in validator
	 * @see https://github.com/icebob/fastest-validator#any
	 */
	interface RuleAny extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'any';
	}

	/**
	 * Validation schema definition for "array" built-in validator
	 * @see https://github.com/icebob/fastest-validator#array
	 */
	interface RuleArray<T = any> extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'array';
		/**
		 * If true, the validator accepts an empty array [].
		 * @default true
		 */
		empty?: boolean;
		/**
		 * Minimum count of elements
		 */
		min?: number;
		/**
		 * Maximum count of elements
		 */
		max?: number;
		/**
		 * Fixed count of elements
		 */
		length?: number;
		/**
		 * The array must contain this element too
		 */
		contains?: T[];
		/**
		 * Every element must be an element of the enum array
		 */
		enum?: T[];
		/**
		 * Validation rules that should be applied to each element of array
		 */
		items: ValidationRule;
	}

	/**
	 * Validation schema definition for "boolean" built-in validator
	 * @see https://github.com/icebob/fastest-validator#boolean
	 */
	interface RuleBoolean extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'boolean';
		/**
		 * if true and the type is not Boolean, try to convert. 1, "true", "1", "on" will be true. 0, "false", "0", "off" will be false.
		 * @default false
		 */
		convert?: boolean;
	}

	/**
	 * Validation schema definition for "date" built-in validator
	 * @see https://github.com/icebob/fastest-validator#date
	 */
	interface RuleDate extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'date';
		/**
		 * if true and the type is not Date, try to convert with new Date()
		 * @default false
		 */
		convert?: boolean;
	}

	/**
	 * Validation schema definition for "email" built-in validator
	 * @see https://github.com/icebob/fastest-validator#email
	 */
	interface RuleEmail extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'email';
		/**
		 * Checker method. Can be quick or precise
		 */
		mode?: 'quick' | 'precise';

		normalize?: boolean;
	}

	/**
	 * Validation schema definition for "enum" built-in validator
	 * @see https://github.com/icebob/fastest-validator#enum
	 */
	interface RuleEnum<T = any> extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'enum';
		/**
		 * The valid values
		 */
		values: T[];
	}

	/**
	 * Validation schema definition for "equal" built-in validator
	 * @see https://github.com/icebob/fastest-validator#equal
	 */
	interface RuleEqual<T = any> extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'equal';
		/**
		 * The valid value
		 */
		value?: T;

		/**
		 * Another field name
		 */
		field?: string;

		/**
		 * Strict value checking.
		 *
		 * @type {'boolean'}
		 * @memberof RuleEqual
		 */
		strict?: boolean;
	}

	/**
	 * Validation schema definition for "forbidden" built-in validator
	 * @see https://github.com/icebob/fastest-validator#forbidden
	 */
	interface RuleForbidden extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'forbidden';

		/**
		 * Removes the forbidden value.
		 *
		 * @type {'boolean'}
		 * @memberof RuleForbidden
		 */
		remove?: boolean;
	}

	/**
	 * Validation schema definition for "function" built-in validator
	 * @see https://github.com/icebob/fastest-validator#function
	 */
	interface RuleFunction extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'function';
	}

	/**
	 * Validation schema definition for "luhn" built-in validator
	 * @see https://github.com/icebob/fastest-validator#luhn
	 */
	interface RuleLuhn extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'luhn';
	}

	/**
	 * Validation schema definition for "mac" built-in validator
	 * @see https://github.com/icebob/fastest-validator#mac
	 */
	interface RuleMac extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'mac';
	}

	/**
	 * Validation schema definition for "multi" built-in validator
	 * @see https://github.com/icebob/fastest-validator#multi
	 */
	interface RuleMulti extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'multi';

		rules: RuleCustom[] | string[];
	}

	/**
	 * Validation schema definition for "number" built-in validator
	 * @see https://github.com/icebob/fastest-validator#number
	 */
	interface RuleNumber extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'number';
		/**
		 * Minimum value
		 */
		min?: number;
		/**
		 * Maximum value
		 */
		max?: number;
		/**
		 * Fixed value
		 */
		equal?: number;
		/**
		 * Can't be equal to this value
		 */
		notEqual?: number;
		/**
		 * The value must be a non-decimal value
		 * @default false
		 */
		integer?: boolean;
		/**
		 * The value must be greater than zero
		 * @default false
		 */
		positive?: boolean;
		/**
		 * The value must be less than zero
		 * @default false
		 */
		negative?: boolean;
		/**
		 * if true and the type is not Number, converts with Number()
		 * @default false
		 */
		convert?: boolean;
	}

	/**
	 * Validation schema definition for "object" built-in validator
	 * @see https://github.com/icebob/fastest-validator#object
	 */
	interface RuleObject extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'object';
		/**
		 * if true any properties which are not defined on the schema will throw an error.
		 * @default false
		 */
		strict?: boolean;
		/**
		 * List of properties that should be validated by this rule
		 */
		properties?: ValidationSchema;
		props?: ValidationSchema;
	}

	/**
	 * Validation schema definition for "string" built-in validator
	 * @see https://github.com/icebob/fastest-validator#string
	 */
	interface RuleString extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'string';
		/**
		 * If true, the validator accepts an empty string ""
		 * @default true
		 */
		empty?: boolean;
		/**
		 * Minimum value length
		 */
		min?: number;
		/**
		 * Maximum value length
		 */
		max?: number;
		/**
		 * Fixed value length
		 */
		length?: number;
		/**
		 * Regex pattern
		 */
		pattern?: string | RegExp;
		/**
		 * The value must contain this text
		 */
		contains?: string[];
		/**
		 * The value must be an element of the enum array
		 */
		enum?: string[];
		/**
		 * The value must be an alphabetic string
		 */
		numeric?: boolean;
		/**
		 * The value must be a numeric string
		 */
		alpha?: boolean;
		/**
		 * The value must be an alphanumeric string
		 */
		alphanum?: boolean;
		/**
		 * The value must be an alphabetic string that contains dashes
		 */
		alphadash?: boolean;
		/**
		 * if true and the type is not a String, converts with String()
		 * @default false
		 */
		convert?: boolean;

		trim?: boolean;
		trimLeft?: boolean;
		trimRight?: boolean;

		padStart?: number;
		padEnd?: number;
		padChar?: string;

		lowercase?: boolean;
		uppercase?: boolean;
		localeLowercase?: boolean;
		localeUppercase?: boolean;
	}

	/**
	 * Validation schema definition for "url" built-in validator
	 * @see https://github.com/icebob/fastest-validator#url
	 */
	interface RuleURL extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'url';
	}

	/**
	 * Validation schema definition for "uuid" built-in validator
	 * @see https://github.com/icebob/fastest-validator#uuid
	 */
	interface RuleUUID extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'uuid';
		/**
		 * UUID version in range 1-5
		 */
		version?: 1 | 2 | 3 | 4 | 5;
	}

	/**
	 * Validation schema definition for custom inline validator
	 * @see https://github.com/icebob/fastest-validator#custom-validator
	 */
	interface RuleCustomInline<T = any> extends RuleCustom {
		/**
		 * Name of built-in validator
		 */
		type: 'custom';
		/**
		 *
		 * @param {{any}} value Value that should be validated
		 * @param {ValidationRuleObject} schema Validation schema that describes current custom validator
		 * @return {{true} | ValidationError[]} true if result is valid or array of validation error messages
		 */
		check: (value: T, schema: ValidationRuleObject, path: string, parent?: object, context: any) => true | ValidationError[];
	}

	/**
	 * Validation schema definition for custom validator
	 * @see https://github.com/icebob/fastest-validator#custom-validator
	 */
	interface RuleCustom {
		/**
		 * Name of custom validator that will be used in validation rules
		 */
		type: string;
		/**
		 * Every field in the schema will be required by default. If you'd like to define optional fields, set optional: true.
		 * @default false
		 */
		optional?: boolean;
		/**
		 * You can set your custom messages in the validator constructor
		 * Sometimes the standard messages are too generic. You can customise messages per validation type per field
		 */
		messages?: MessagesType;

		/**
		 * Default value
		 */
		default: any;

		/**
		 * You can define any additional options for custom validators
		 */
		[key: string]: any;
	}

	/**
	 * List of all possible keys that can be used for error message override
	 */
	interface BuiltInMessages {
		/**
		 * The '{field}' field is required.
		 */
		required?: string;
		/**
		 * The '{field}' field must be a string.
		 */
		string?: string;
		/**
		 * The '{field}' field must not be empty.
		 */
		stringEmpty?: string;
		/**
		 * The '{field}' field length must be greater than or equal to {expected} characters long.
		 */
		stringMin?: string;
		/**
		 * The '{field}' field length must be less than or equal to {expected} characters long.
		 */
		stringMax?: string;
		/**
		 * The '{field}' field length must be {expected} characters long.
		 */
		stringLength?: string;
		/**
		 * The '{field}' field fails to match the required pattern.
		 */
		stringPattern?: string;
		/**
		 * The '{field}' field must contain the '{expected}' text.
		 */
		stringContains?: string;
		/**
		 * The '{field}' field does not match any of the allowed values.
		 */
		stringEnum?: string;
		/**
		 * The '{field}' field must be a numeric string.
		 */
		stringNumeric?: string;
		/**
		 * The '{field}' field must be an alphabetic string.
		 */
		stringAlpha?: string;
		/**
		 * The '{field}' field must be an alphanumeric string.
		 */
		stringAlphanum?: string;
		/**
		 * The '{field}' field must be an alphadash string.
		 */
		stringAlphadash?: string;

		/**
		 * The '{field}' field must be a number.
		 */
		number?: string;
		/**
		 * The '{field}' field must be greater than or equal to {expected}.
		 */
		numberMin?: string;
		/**
		 * The '{field}' field must be less than or equal to {expected}.
		 */
		numberMax?: string;
		/**
		 * The '{field}' field must be equal with {expected}.
		 */
		numberEqual?: string;
		/**
		 * The '{field}' field can't be equal with {expected}.
		 */
		numberNotEqual?: string;
		/**
		 * The '{field}' field must be an integer.
		 */
		numberInteger?: string;
		/**
		 * The '{field}' field must be a positive number.
		 */
		numberPositive?: string;
		/**
		 * The '{field}' field must be a negative number.
		 */
		numberNegative?: string;

		/**
		 * The '{field}' field must be an array.
		 */
		array?: string;
		/**
		 * The '{field}' field must not be an empty array.
		 */
		arrayEmpty?: string;
		/**
		 * The '{field}' field must contain at least {expected} items.
		 */
		arrayMin?: string;
		/**
		 * The '{field}' field must contain less than or equal to {expected} items.
		 */
		arrayMax?: string;
		/**
		 * The '{field}' field must contain {expected} items.
		 */
		arrayLength?: string;
		/**
		 * The '{field}' field must contain the '{expected}' item.
		 */
		arrayContains?: string;
		/**
		 * The '{field} field value '{expected}' does not match any of the allowed values.
		 */
		arrayEnum?: string;

		/**
		 * The '{field}' field must be a boolean.
		 */
		boolean?: string;

		/**
		 * The '{field}' field must be a Date.
		 */
		date?: string;
		/**
		 * The '{field}' field must be greater than or equal to {expected}.
		 */
		dateMin?: string;
		/**
		 * The '{field}' field must be less than or equal to {expected}.
		 */
		dateMax?: string;

		/**
		 * The '{field}' field value '{expected}' does not match any of the allowed values.
		 */
		enumValue?: string;

		/**
		 * The '{field}' field value must be equal to '{expected}'.
		 */
		equalValue?: string;
		/**
		 * The '{field}' field value must be equal to '{expected}' field value.
		 */
		equalField?: string;

		/**
		 * The '{field}' field is forbidden.
		 */
		forbidden?: string;

		/**
		 * The '{field}' field must be a function.
		 */
		function?: string;

		/**
		 * The '{field}' field must be a valid e-mail.
		 */
		email?: string;

		/**
		 * The '{field}' field must be a valid checksum luhn.
		 */
		luhn?: string;

		/**
		 * The '{field}' field must be a valid MAC address.
		 */
		mac?: string;

		/**
		 * The '{field}' must be an Object.
		 */
		object?: string;
		/**
		 * The object '{field}' contains forbidden keys: '{actual}'.
		 */
		objectStrict?: string;

		/**
		 * The '{field}' field must be a valid URL.
		 */
		url?: string;

		/**
		 * The '{field}' field must be a valid UUID.
		 */
		uuid?: string;
		/**
		 * The '{field}' field must be a valid UUID version provided.
		 */
		uuidVersion?: string;
	}

	/**
	 * Type with description of custom error messages
	 */
	type MessagesType = BuiltInMessages & { [key: string]: string };

	/**
	 * Union type of all possible built-in validators
	 */
	type ValidationRuleObject =
		RuleAny
		| RuleArray
		| RuleBoolean
		| RuleDate
		| RuleEmail
		| RuleEqual
		| RuleEnum
		| RuleForbidden
		| RuleFunction
		| RuleLuhn
		| RuleMac
		| RuleMulti
		| RuleNumber
		| RuleObject
		| RuleString
		| RuleURL
		| RuleUUID
		| RuleCustom
		| RuleCustomInline;

	/**
	 * Description of validation rule definition for a some property
	 */
	type ValidationRule = ValidationRuleObject | ValidationRuleObject[] | ValidationRuleName | string;

	/**
	 * Definition for validation schema based on validation rules
	 */
	interface ValidationSchema {
		/**
		 * List of validation rules for each defined field
		 */
		[key: string]: ValidationRule | boolean;
		/**
		 * Object properties which are not specified on the schema are ignored by default.
		 * If you set the $$strict option to true any aditional properties will result in an strictObject error.
		 * @default false
		 */
		$$strict?: boolean;

		$$root?: boolean;
	}

	/**
	 * Structure with description of validation error message
	 */
	interface ValidationError {
		/**
		 * Name of validation rule that generates this message
		 */
		type: ValidationRuleName | string;
		/**
		 * Field that catch validation error
		 */
		field: string;
		/**
		 * Description of current validation error
		 */
		message: keyof BuiltInMessages | string;
		/**
		 * Expected value from validation rule
		 */
		expected?: any;
		/**
		 * Actual value received by validation rule
		 */
		actual?: any;
	}

	/**
	 * List of possible validator constructor options
	 */
	type ValidatorConstructorOptions = {
		debug?: boolean,
		/**
		 * List of possible error messages
		 */
		messages?: MessagesType,
	};

	class Validator {
		/**
		 * Constructor of validation class
		 * @param {ValidatorConstructorOptions} opts List of possible validator constructor options
		 */
		constructor(opts?: ValidatorConstructorOptions);

		/**
		 * Register a custom validation rule in validation object
		 * @param {string} type
		 * @param fn
		 */
		add(type: string, fn: any): void;

		/**
		 * Build error message
		 * @param {string} type Name of validation rule (equal to "type" option)
		 * @param {{any}} [expected] Expected value for validation rule
		 * @param {{any}} [actual] Actual value received to validation
		 * @return {ValidationError}
		 */
		makeError(type: keyof BuiltInMessages | string, expected?: any, actual?: any): ValidationError;

		/**
		 * Compile validator functiona that working up 100 times faster that native validation process
		 * @param {ValidationSchema | ValidationSchema[]} schema Validation schema definition that should be used for validation
		 * @return {(object: object) => (true | ValidationError[])} function that can be used next for validation of current schema
		 */
		compile(schema: ValidationSchema | ValidationSchema[]): (object: object) => true | ValidationError[];

		/**
		 * Native validation method to validate obj
		 * @param {object} obj Object that should be validated
		 * @param {ValidationSchema} schema Validation schema definition that should be used for validation
		 * @return {{true} | ValidationError[]}
		 */
		validate(obj: object, schema: ValidationSchema): true | ValidationError[];
	}

	export {
		ValidationRuleName,

		MessagesType,
		BuiltInMessages,

		RuleAny,
		RuleArray,
		RuleBoolean,
		RuleDate,
		RuleEmail,
		RuleEnum,
		RuleEqual,
		RuleForbidden,
		RuleFunction,
		RuleLuhn,
		RuleMac,
		RuleMulti,
		RuleNumber,
		RuleObject,
		RuleString,
		RuleURL,
		RuleUUID,
		RuleCustom,
		RuleCustomInline,

		ValidationRuleObject,
		ValidationRule,
		ValidationSchema,
		ValidationError,
	};

	export default Validator;
}
