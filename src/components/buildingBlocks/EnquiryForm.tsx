import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { enquiryFormSchema } from "@/types";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

const EnquiryForm: React.FunctionComponent<{ classes: string }> = ( {classes} ) => {

	const form = useForm<z.infer<typeof enquiryFormSchema>>({
		resolver: zodResolver(enquiryFormSchema),
		defaultValues: {
			title: "",
			sender: "",
			body: ""
		},
	});

	const [ sent, setSent ] = useState( false );

	// data: z.infer<typeof enquiryFormSchema>
	function onSubmit() {
		form.reset()
		setSent( true );
	}

	return (
		<Card className={`${classes} shadow-xl`}>
			<CardHeader>
				<CardTitle> Enquiry Form </CardTitle>
				<CardDescription>
					Contact me about anything! I will get back to you as soon as possible
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<Controller
							name="title"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-title" className="flex items-center gap-3">
									Title
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} className="relative text-xs bottom-[0.2px]"/>
									)}
								</FieldLabel>
								<Input
									{...field}
									id="form-rhf-demo-title"
									aria-invalid={fieldState.invalid}
									placeholder="Login button not working on mobile"
									autoComplete="off"
								/>
								</Field>
							)}
						/>
						<Controller
							name="sender"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-sender" className="flex items-center gap-3">
									How should I call you?
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} className="relative text-xs top-[0.5px]"/>
									)}
								</FieldLabel>
								<Input
									{...field}
									id="form-rhf-demo-sender"
									aria-invalid={fieldState.invalid}
									placeholder="Your name or affiliation"
									autoComplete="off"
								/>
								</Field>
							)}
						/>
						<Controller
							name="body"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-body" className="flex items-center gap-3">
									Main Body
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} className="relative text-xs top-[0.5px]"/>
									)}
								</FieldLabel>
								<Textarea
									{...field}
									id="form-rhf-demo-body"
									placeholder="I'm having an issue with the login button on mobile."
									className="h-24 resize-none overflow-y-scroll not-hover:no-scrollbar!"
									style={ { scrollbarWidth: "thin" } }
									aria-invalid={fieldState.invalid}
								/>
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal">
				<Button type="submit" form="form-rhf-demo" disabled={sent}>
					Submit
				</Button>
				<p className={`${sent && 'inline-block'} hidden font-medium text-green-500`}> Thank you for your enquiry, I will get back to you soon! </p>
				</Field>
			</CardFooter>
		</Card>
	);

}

export default EnquiryForm
