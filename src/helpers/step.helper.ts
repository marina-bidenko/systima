import { test } from "@playwright/test";
import { BaseComponent } from "UI/components/baseComponent";

export function step<This extends BaseComponent, Args extends any[], Return>(
	message?: string
) {
	return function (
		target: (this: This, ...args: Args) => Return | Promise<Return>,
		context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return | Promise<Return>>
	) {
		return async function (this: This, ...args: Args): Promise<Return> {
			const name = message ?? `${this.constructor.name}.${String(context.name)}`;

			return await test.step(name, async () => target.call(this, ...args));
		};
	};
}

