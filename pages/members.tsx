import Layout from "@components/Layout";
import Loading from "@components/Loading";
import NavBar from "@components/NavBar";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import getData from "@libs/server/getData";
import { ResponseType } from "@libs/server/withHandler";
import { User } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const { user, loading: userLoading } = useUser();
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const { ok, members } = await getData("/api/user/getMembers");
      console.log(members);
      if (ok) {
        setMembers(members);
      } else {
        alert("data load failed.");
      }
    })();
  }, []);

  return (
    <Layout title="Members">
      {user ? <NavBar user={user} /> : null}
      {members.length ? (
        <div className="w-2/3 mx-auto pt-52">
          {members.map((member, i) => (
            <Link key={i} href={`/schedule/${member.id}`}>
              <a
                className="p-5 w-48 flex items-center border-b-[1px] last:border-0 text-lg font-medium text-gray-800
              bg-white rounded-md shadow-sm mb-5 hover:bg-gray-50 active:scale-[0.98]"
              >
                {member.name}
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default Login;
