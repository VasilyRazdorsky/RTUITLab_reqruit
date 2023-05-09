import { Link } from "react-scroll";

export default function MainInfo() {
  return (
    <section className="main-info">
      <div className="main-info__divider"></div>
      <h2 className="main-info__title">Почему именно мы? 🙌</h2>
      <p className="main-info__text">
        Выбирая нас, вы получаете возможность узнавать и посещать самые громкие,
        ожидаемые и большие события в Москве, официально подтверждённые
        администрацией города. Самое важное для нас - осведомлённость и комфорт
        клиента. Вы можете создать аккаунт и просматривать ленту событий,
        добавлять к себе в Мои События мероприятия, которые хотите посетить, а
        также подписаться на рассылку, чтобы узнавать всё первым.
      </p>
      <div className="main-info__divider"></div>
    </section>
  );
}