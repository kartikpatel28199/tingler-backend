import { Injectable } from '@nestjs/common';
import { User } from '../../../user/entities/user.entity';
import { ProfileProgressSteps } from '../../enums/profile-progress-steps';
import { ProfileProgressStep } from '../entities/profile-progress-step.entity';
import { UserProfileProgress } from '../entities/user-profile-progress.entity';
import { ProfileProgressStepRepository } from '../repositories/profile-progress-step.repository';
import { UserProfileProgressRepository } from '../repositories/user-profile-progress.repository';

@Injectable()
export class UserProfileProgressService {
  constructor(
    private profileProgressStepRepository: ProfileProgressStepRepository,
    private userProfileProgressRepository: UserProfileProgressRepository,
  ) {}

  getAllProfileProgressStep(): Promise<ProfileProgressStep[]> {
    return this.profileProgressStepRepository.find();
  }

  async createUserProfileProgress(user: User) {
    const steps = await this.getAllProfileProgressStep();
    const progress = steps.map(
      (step: ProfileProgressStep): UserProfileProgress => {
        const newUserProfileProgress = new UserProfileProgress();
        newUserProfileProgress.user = user;
        newUserProfileProgress.profileProgressStep = step;
        return newUserProfileProgress;
      },
    );

    return this.userProfileProgressRepository.save(progress);
  }

  async updateUserProfileProgressStatus(
    user,
    step: ProfileProgressSteps,
    isCompleted: boolean,
  ) {
    console.log('user', user);
    const profileProgressStep =
      await this.profileProgressStepRepository.findOne({ stepName: step });
    console.log(profileProgressStep, '---');
    return this.userProfileProgressRepository.update(
      { profileProgressStepId: profileProgressStep.id, userId: user.uid },
      { isCompleted },
    );
  }
}
