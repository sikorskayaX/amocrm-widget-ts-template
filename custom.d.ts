interface ObjectConstructor {
	/**
	 * Returns an array of key/values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	entries<T>(
		o: { [s: keyof T]: T[keyof T] } | ArrayLike<T>
	): [keyof T, T[keyof T]][];
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png';
declare module '*.jpj';
declare module '*.jpeg';
{
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare module '*.svg' {
	const content: any;
	export default content;
  }
