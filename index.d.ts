interface CameraShakeInstance {
	Magnitude: number;
	Roughness: number;
	PositionInfluence: Vector3;
	RotationInfluence: Vector3;
	DeleteOnInactive: boolean;
	roughMod: number;
	magnMod: number;
	fadeOutDuration: number;
	fadeInDuration: number;
	sustain: boolean;
	currentFadeTime: number;
	tick: number;

	UpdateShake(dt: number): Vector3;
	StartFadeOut(fadeOutTime: number): void;
	StartFadeIn(fadeInTime: number): void;
	GetScaleRoughness(): number;
	SetScaleRoughness(v: number): void;
	GetScaleMagnitude(): number;
	SetScaleMagnitude(v: number): void;
	GetNormalizedFadeTime(): number;
	IsShaking(): boolean;
	IsFadingOut(): boolean;
	IsFadingIn(): boolean;

	/**
	 * FadingIn = 0
	 *
	 * FadingOut = 1
	 *
	 * Sustained = 2
	 *
	 * Inactive = 3
	 *
	 */
	GetState(): 0 | 1 | 2 | 3;
}

interface CameraShakeInstanceConstructor {
	new (magnitude: number, roughness: number, fadeInTime: number, fadeOutTime: number): CameraShakeInstance;
}

interface CameraShaker {
	Start(): void;
	Stop(): void;
	Shake(shakeInstance: CameraShakeInstance): void;
	ShakeSustain(shakeInstance: CameraShakeInstance): CameraShakeInstance;
	ShakeOnce(
		magnitude: number,
		roughness: number,
		fadeInTime?: number,
		fadeOutTime?: number,
		posInfluence?: Vector3,
		rotInfluence?: Vector3
	): void;
	StartShake(
		magnitude: number,
		roughness: number,
		fadeInTime?: number,
		posInfluence?: Vector3,
		rotInfluence?: Vector3
	): void;

	/**
	 * Stop all sustained shakes.
	 * @param fadeOutTime Fadeout time (defaults to the same as fadein time if not supplied)
	 */
	StopSustained(fadeOutTime?: number): void;
}

interface CameraShakerConstructor {
	new (renderPriority: Enum.RenderPriority["Value"], callbackFunction: (shakeCFrame: CFrame) => void): CameraShaker;

	CameraShakeInstance: CameraShakeInstanceConstructor;

	Presets: {
		/**
		 * A high-magnitude, short, yet smooth shake.
		 *
		 * Should happen once.
		 */
		Bump: CameraShakeInstance;
		/**
		 * An intense and rough shake.
		 *
		 * Should happen once.
		 */
		Explosion: CameraShakeInstance;
		/**
		 * A continuous, rough shake.
		 *
		 * Sustained.
		 */
		Earthquake: CameraShakeInstance;
		/**
		 * A bizarre shake with a very high magnitude and low roughness.
		 *
		 * Sustained.
		 */
		BadTrip: CameraShakeInstance;
		/**
		 * A subtle, slow shake.
		 *
		 * Sustained.
		 */
		HandheldCamera: CameraShakeInstance;
		/**
		 * A very rough, yet low magnitude shake.
		 *
		 * Sustained.
		 */
		Vibration: CameraShakeInstance;
		/**
		 * A slightly rough, medium magnitude shake.
		 *
		 * Sustained.
		 */
		RoughDriving: CameraShakeInstance;
	};
}

declare const CameraShaker: CameraShakerConstructor;
export = CameraShaker;
