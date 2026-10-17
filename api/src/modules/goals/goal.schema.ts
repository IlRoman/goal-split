import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GoalStatus } from './constants';
import { GoalStep, GoalStepSchema } from './goal-step.schema';

export type GoalDocument = HydratedDocument<Goal>;

@Schema({ timestamps: true })
export class Goal {
  @Prop({ required: true, trim: true, minlength: 1 })
  text!: string;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(GoalStatus),
    default: GoalStatus.Draft,
  })
  status!: GoalStatus;

  @Prop({ type: [GoalStepSchema], default: [] })
  steps!: GoalStep[];
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
