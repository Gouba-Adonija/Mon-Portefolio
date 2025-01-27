export function Langue() {
  return (
    <div className="">
      <div className="">
        Français
        <input type="range" value={100} name="" id="" disabled />
        <p>Niveau excellent en français, lut et écrit</p>
      </div>
      <div className="">
        Anglais
        <input type="range" value={85} name="" id="" disabled />
        <p>Niveau moyen en Anglais, lut et écrit</p>
      </div>
    </div>
  );
}
