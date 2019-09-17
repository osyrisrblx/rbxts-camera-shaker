# rbxts-camera-shaker

roblox-ts package for Crazyman32's Roblox port of "EZ Camera Shake"

## Crash Course
```TS
import CameraShaker from "@rbxts/camera-shaker"

const camShake = new CameraShaker(
	Enum.RenderPriority.Camera.Value,
	shakeCFrame => camera.CFrame = playerCFrame.mul(shakeCFrame)
);

camShake.Start();

// Explosion shake:
camShake.Shake(CameraShaker.Presets.Explosion);

wait(1)

// Custom shake:
camShake.ShakeOnce(3, 1, 0.2, 1.5);

```

## Presets
**CameraShaker.Presets.Bump**\
A high-magnitude, short, yet smooth shake.\
Should happen once.

**CameraShaker.Presets.Explosion**\
An intense and rough shake.\
Should happen once.

**CameraShaker.Presets.Earthquake**\
A continuous, rough shake.\
Sustained.

**CameraShaker.Presets.BadTrip**\
A bizarre shake with a very high magnitude and low roughness.\
Sustained.

**CameraShaker.Presets.HandheldCamera**\
A subtle, slow shake.\
Sustained.

**CameraShaker.Presets.Vibration**\
A very rough, yet low magnitude shake.\
Sustained.

**CameraShaker.Presets.RoughDriving**\
A slightly rough, medium magnitude shake.\
Sustained.
