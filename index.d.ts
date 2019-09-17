interface CameraShakePreset {
	(): void;
}

interface CameraShaker {
	Start(): void;
	Stop(): void;
	Shake(shakeInstance: CameraShakePreset): void;
	ShakeSustain(shakeInstance: CameraShakePreset): void;
	ShakeOnce(
		magnitude: number,
		roughness: number,
		fadeInTime?: number,
		fadeOutTime?: number,
		posInfluence?: number,
		rotInfluence?: number
	): void;
	StartShake(
		magnitude: number,
		roughness: number,
		fadeInTime?: number,
		posInfluence?: number,
		rotInfluence?: number
	): void;
}

interface CameraShakerConstructor {
	new (renderPriority: Enum.RenderPriority["Value"], callbackFunction: (shakeCFrame: CFrame) => void): CameraShaker;

	Presets: {
		/**
		 * A high-magnitude, short, yet smooth shake.
		 *
		 * Should happen once.
		 */
		Bump: CameraShakePreset;
		/**
		 * An intense and rough shake.
		 *
		 * Should happen once.
		 */
		Explosion: CameraShakePreset;
		/**
		 * A continuous, rough shake.
		 *
		 * Sustained.
		 */
		Earthquake: CameraShakePreset;
		/**
		 * A bizarre shake with a very high magnitude and low roughness.
		 *
		 * Sustained.
		 */
		BadTrip: CameraShakePreset;
		/**
		 * A subtle, slow shake.
		 *
		 * Sustained.
		 */
		HandheldCamera: CameraShakePreset;
		/**
		 * A very rough, yet low magnitude shake.
		 *
		 * Sustained.
		 */
		Vibration: CameraShakePreset;
		/**
		 * A slightly rough, medium magnitude shake.
		 *
		 * Sustained.
		 */
		RoughDriving: CameraShakePreset;
	};
}

declare const CameraShaker: CameraShakerConstructor;
export = CameraShaker;
