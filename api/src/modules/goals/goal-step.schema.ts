import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class GoalStep {
  @Prop({ required: true, trim: true, minlength: 1 })
  text!: string;

  @Prop({ required: true, default: false })
  done!: boolean;
}

export const GoalStepSchema = SchemaFactory.createForClass(GoalStep);
