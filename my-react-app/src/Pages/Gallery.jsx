import React, { useEffect, useState } from "react";

const logoPath = "/update.png";

const rows = [
  {
    id: "notice",
    title: "নোটিশ সেকশন",
    subtitle: "গুরুত্বপূর্ণ আপডেট ও তথ্য",
    images: [
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/653017306_1428553695955912_1023563791847627044_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHZt-fjN1wCXg_S86FTUZPTwkQG9RUHO07CRAb1FQc7TjfNvrs_xW_y6yx4jGJZqFFH7WA9Sh7Ryi5T9G1VgD7H&_nc_ohc=7IIYFEHb-j8Q7kNvwGL8IN0&_nc_oc=AdpfgCV7okyb8VKbPW8ydCzc-ACyirv-mBLx2G5QakUCVcE4_XTbDTge8CQFIFV9YZI&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=PSjzrqzwGs5dyAS6Ff0g7Q&_nc_ss=7a3a8&oh=00_Af05Xl5H_Ga_bE7X-M_gTXRJeOqMyVqWIUSWWLGSAZOXKQ&oe=69D6BBF5",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/645254782_1413369300807685_1872779810163388905_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFl3AJcmaBzCcOwUG3mGnYRlDo7g_qpDhiUOjuD-qkOGKcbSggW4NNjzPephYQefcXlDC6IUf2sBiO0bCzwbJyP&_nc_ohc=2-nhtEz7magQ7kNvwFhtfha&_nc_oc=Adqt1yl7yK2M-sWweMmlSWL9XR4fR6k2mtY0u-bi3Xuvs8QhRoZAH9qzDsyc8_yeJ8w&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=VgJS8-Y7ozmml0Vs2EyTsQ&_nc_ss=7a3a8&oh=00_Af3MXyZnrznDRlFJUNsUAkKai9THX_5rSXIBD2NdCgTjlQ&oe=69D6CA53",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/615402423_1371407665003849_4343690346201095725_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHMjroe9DPnzzR8gYpeKfWFN_Evyl-Z5yI38S_KX5nnIg3NFu_Blbydal6iRzHde83NFLJ3FnqYJleTBrTRmLBd&_nc_ohc=nbjIWMDFvP0Q7kNvwFQtTST&_nc_oc=AdpIQtloiviwbFpXYQPqUT2kWgt_1Zc-T9qkbfvQYdLVN_JlWsM9OntoYXec8_9giiI&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=H_3HjkfcfCN-0xv1QToaQw&_nc_ss=7a3a8&oh=00_Af3V7YumcYocJq0rzZUBjbU5b6-OpEklEZzVgdd4V12JRQ&oe=69D6B450",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/607257779_1361402439337705_4126449706303817120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGPPumFA3OsWQf2uHopce53vS0Sv0PseAa9LRK_Q-x4BqGm8fATObKXjZJAUgO8uB9U7rK2r3XaxxcuDU2FDdKm&_nc_ohc=40AISkTaYC0Q7kNvwHr7816&_nc_oc=AdoZV4lGTFiwug73pfTN2QKmo34TRPiXKdKnkVT22Hq72iPTPUhtaA9ITcWmOPeCXSY&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=f4nRz5_0I8AYfu7maXIZmQ&_nc_ss=7a3a8&oh=00_Af1bR66tMNTzqSkzYvI1jnYjqeOm82zPr720BseeLUMy_w&oe=69D6BA8B",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/605758117_1360486766095939_6618312288728107774_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFsGAX8vj671ynOc4sZqVoFxvA2YpQqre3G8DZilCqt7UotHEhZYcd_RvKrOqB012P6xhmi2OUutLoViyhnbYpD&_nc_ohc=YwUZwLtPBgoQ7kNvwE_7dOe&_nc_oc=AdoCYwOg-bO-eSodnR8_RJc6G3FXfsLVTOgh7XRcov-zXSrHr6yyAbiyomEns5L0NW8&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=aUX9XD5w3cI5MdQxJzgGBA&_nc_ss=7a3a8&oh=00_Af35en--qHNVOfnr2Qk2gUv-LzNoavJ444Eh6xJz--byig&oe=69D6BCF8",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/599552964_1348939577250658_2965882789259543902_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHBWjycs409ax2tajmur_TTgL-CapKs2qyAv4JqkqzarFWsD7zIQx2UNu8PAZlRFa2JupOr5_au9Fb3GbHFyxdQ&_nc_ohc=Z6O54YBnqT8Q7kNvwHdudD3&_nc_oc=Adoi3sR1jmsHFm1f2QNzxXFygfphqmylkbeCu_F5yaoLFPsiC0e0AkdhmhC8LA-pSHQ&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=8R2UCg4MiIj6Ha4VN9afgQ&_nc_ss=7a3a8&oh=00_Af3Kr-TSNIsQvshI-_agP2uTNHJcKt39t74eCJ4xpcGI3A&oe=69D6BF9F",
    ],
    direction: "left",
  },
  {
    id: "doctor",
    title: "ডাক্তার ও নার্স",
    subtitle: "নিবেদিত সেবার মুহূর্ত",
    images: [
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/651290211_1427886692689279_2337823765216653189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGIZzJQJVK7k8uhA29Z_Sjg3VNqCvUb_vrdU2oK9Rv--hqbtSJ6W-puqaWCH4ooYGOSjU-GkxaiLaBtzQebhR9d&_nc_ohc=X3A-zgBrOGwQ7kNvwHNZURr&_nc_oc=AdpWPFmH2uFmNkCCPBiLCco_i4Hy3L690k3k8GqypB8xfcCWCDaqMyHXcwbjmD_BhGs&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=KuyynEtGjfWfHZRGUs2D3g&_nc_ss=7a3a8&oh=00_Af21IHVcJgyg7ehAMc_uuGSXwKnF52JI-vhJHOrGfpMQFQ&oe=69D6D0FE",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/653782384_1427886699355945_129790542255832971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH6luua6R30amwMj2v7_-531ensCkbDBTLV6ewKRsMFMmFKwyEcOhIV4caRMbID_08J7tZzP93ORUXoBI22YlOd&_nc_ohc=7X3FVJIYdr0Q7kNvwFFWlbP&_nc_oc=AdoLqOrsIyCJLPLydKIVnPNjYfc6fXIcIm8PQr5l_9An_4L_SFXAuoURoJVzQkaT2-c&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=uwl1_Ia7DWFwVWbRZorPiQ&_nc_ss=7a3a8&oh=00_Af3I6sIpdb8sO-qqKZbOU4MHpAk828tnJ0zk0rxNyjuGNw&oe=69D6B187",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/653809812_1427886649355950_4070428514469276080_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGFivZVW_9IG1T76vOa-jsU1cVo78GJq0PVxWjvwYmrQ84sxLVXpwbxFHbPNAwemQgFAv-KU_JqQy0WbXBtk-Tq&_nc_ohc=TsWbip_nbegQ7kNvwH310JH&_nc_oc=AdoCiZ1RSedD23esDa7hahg094lEQk1h7nIEnA0I9gD00c7DeJfDpRqUx5o03zWsyvw&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=CcwXV_M-V0sWcK4JLzDJLA&_nc_ss=7a3a8&oh=00_Af2UNXkyzoWJ1F-FTaklQeyxvuMggqwkRaUfS7YZmPiI9Q&oe=69D6B8D8",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/629229079_1393480466129902_7069613858889986885_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH93eEiFF4FOoVT5dkLgTWdDd_PFHXc3XQN388UddzddAjW3DSxDXaHnmk9FdMy5w2PulDrlIiS3pMR2mko01Hq&_nc_ohc=LfUJiT3iFmIQ7kNvwHSTmpv&_nc_oc=AdqUPSSmjX2OmD5O36lHMgoZXRxybXYzWLGPVzesvKWeDOQzmbMLmR_6ugO41Hw-0rw&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=Ry1BDnjYLhtlzYceLU78-w&_nc_ss=7a3a8&oh=00_Af1vejIvunmAfVfw40VGor1CC4EIMHDQ5Vhzd_3TJC6CJA&oe=69D6CB68",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/651290211_1427886692689279_2337823765216653189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGIZzJQJVK7k8uhA29Z_Sjg3VNqCvUb_vrdU2oK9Rv--hqbtSJ6W-puqaWCH4ooYGOSjU-GkxaiLaBtzQebhR9d&_nc_ohc=X3A-zgBrOGwQ7kNvwHNZURr&_nc_oc=AdpWPFmH2uFmNkCCPBiLCco_i4Hy3L690k3k8GqypB8xfcCWCDaqMyHXcwbjmD_BhGs&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=KuyynEtGjfWfHZRGUs2D3g&_nc_ss=7a3a8&oh=00_Af21IHVcJgyg7ehAMc_uuGSXwKnF52JI-vhJHOrGfpMQFQ&oe=69D6D0FE",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/653782384_1427886699355945_129790542255832971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH6luua6R30amwMj2v7_-531ensCkbDBTLV6ewKRsMFMmFKwyEcOhIV4caRMbID_08J7tZzP93ORUXoBI22YlOd&_nc_ohc=7X3FVJIYdr0Q7kNvwFFWlbP&_nc_oc=AdoLqOrsIyCJLPLydKIVnPNjYfc6fXIcIm8PQr5l_9An_4L_SFXAuoURoJVzQkaT2-c&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=uwl1_Ia7DWFwVWbRZorPiQ&_nc_ss=7a3a8&oh=00_Af3I6sIpdb8sO-qqKZbOU4MHpAk828tnJ0zk0rxNyjuGNw&oe=69D6B187",
    ],
    direction: "right",
  },
  {
    id: "patient",
    title: "রোগী ও সেবা",
    subtitle: "যত্ন ও আস্থার গল্প",
    images: [
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/588763089_1332325698912046_4219794662402558324_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEsCEDcaE8bavdx4vQEBii0kqaqJlOLkpmSpqomU4uSmXrea68qaeYfrQCQq_s3RzB_wdjOQ9iSeKIcw4dkw6Gx&_nc_ohc=68_Lvc9u1D8Q7kNvwHXeOhO&_nc_oc=AdqoryZYaszPDMGBADsN5ox6NyGhPBdGC1JprrwmsECUmFMqOm5nj9SgRVF9RHFDW3s&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=LKlq_ArrzP7YqzLUB0UNMA&_nc_ss=7a3a8&oh=00_Af249ZeAfe3iiShpxT8NNgw-1pSpsQqymID6hGwTeaHBhA&oe=69D6B54A",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/589016376_1334792985331984_545564789109604382_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGElTVTkf2EqhFLcrDJopDoLgPT24tixTguA9Pbi2LFOOfnjqkqseUGj7K_vLlOhgzYQq_4z7siZbiRKlRmyNS6&_nc_ohc=gp5oH-5cvDsQ7kNvwHeDWiW&_nc_oc=Adr33ndHiwNbsRCiu26SyWfdUpKKpCnj15bG-nE0_II5Oz32ZQV9lxHN8d2bKzuXJQo&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=VjbONa0J9kxYvu0Y0nG59Q&_nc_ss=7a3a8&oh=00_Af2ZS7K_IRGLBHAB7iWk49yAuqdp-Q0cfLa7z5ib-RxvOQ&oe=69D6D689",
      "https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/590804703_1334739185337364_3942260463651185725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHADSz5kCD1Ljm4HmkX0o0Y44LaNiKgyZPjgto2IqDJk3irrunxaEMFNwO8Vqeb-_zDvDGmuR3yZ6jpNWPr_Ggn&_nc_ohc=ECBeVQxGlj4Q7kNvwG0IkaF&_nc_oc=Adrd47D3k64WcYqFSDGj7ePOgdKfBVx7yfrti_dM8epfoZo6_HB70-dEiDvlWjJnxVc&_nc_zt=23&_nc_ht=scontent.fspd6-1.fna&_nc_gid=NPh-oMe-T7_gQ94lHRgDtA&_nc_ss=7a3a8&oh=00_Af3h9Sfc3kxfd_HFnFuoQdX6nOekY5f6jd55MbIQ-LrUSg&oe=69D6CA29",
      "/Gallery/pic4.jpg",
      "/Gallery/pic5.jpg",
      "/Gallery/pic6.jpg",
    ],
    direction: "left",
  },
];

const clamp = (i, total) => (i + total) % total;

const Slider = ({ title, subtitle, images, direction, onOpen }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () =>
    setIndex((i) =>
      direction === "left" ? clamp(i + 1, total) : clamp(i - 1, total),
    );

  const prev = () =>
    setIndex((i) =>
      direction === "left" ? clamp(i - 1, total) : clamp(i + 1, total),
    );

  useEffect(() => {
    const interval = setInterval(next, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-[#12414D]">{title}</h2>
          <p className="text-sm text-[#4C7981]">{subtitle}</p>
        </div>

        <div className="flex gap-2">
          <button onClick={prev} className="btn">
            ←
          </button>
          <button onClick={next} className="btn">
            →
          </button>
        </div>
      </div>

      {/* 🔥 Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => onOpen(images, i, title)}
            className="group cursor-pointer rounded-[24px] overflow-hidden bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
          >
            <div className="overflow-hidden">
              <img
                src={img}
                className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 📱 Mobile Slider */}
      <div className="lg:hidden overflow-hidden rounded-[24px] bg-white shadow">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => onOpen(images, i, title)}
              className="min-w-full h-[240px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Lightbox = ({ data, onClose, onNext, onPrev }) => {
  const { images, index } = data;

  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button className="absolute top-5 right-5 text-white text-3xl">✕</button>

      <img
        src={images[index]}
        className="max-h-[90vh] max-w-[90vw] rounded-xl"
      />

      <button
        className="absolute left-5 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        ←
      </button>
      <button
        className="absolute right-5 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        →
      </button>
    </div>
  );
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
  });

  const open = (images, index) => setLightbox({ open: true, images, index });

  const close = () => setLightbox({ open: false, images: [], index: 0 });

  const next = () =>
    setLightbox((p) => ({
      ...p,
      index: (p.index + 1) % p.images.length,
    }));

  const prev = () =>
    setLightbox((p) => ({
      ...p,
      index: (p.index - 1 + p.images.length) % p.images.length,
    }));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#F4FBFC] to-[#E6F7F8] px-4 py-6">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[32px] shadow-xl p-6 sm:p-10">
          <div className="text-center mb-10">
            <img src={logoPath} className="h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-[#12414D]">
              আমাদের সেবার দৃশ্যপট
            </h1>
            <p className="text-[#4C7981] mt-2">
              সেবা, যত্ন এবং আস্থার প্রতিচ্ছবি
            </p>
          </div>

          <div className="space-y-12">
            {rows.map((row) => (
              <Slider key={row.id} {...row} onOpen={open} />
            ))}
          </div>
        </div>
      </div>

      {lightbox.open && (
        <Lightbox data={lightbox} onClose={close} onNext={next} onPrev={prev} />
      )}
    </>
  );
};

export default Gallery;
