import React, { Suspense } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router";
import useCreateNotes from "../hooks/useCreateNotes";
import { ArrowLeftIcon } from "lucide-react";
import Form from "../components/form/Form";
import Label from "../components/Label/Label";
import Input from "../components/input/Input";
import SectionHeader from "../components/SectionHeader/SectionHeader";

function Create() {
  const { createNotes, formData, setFormData } = useCreateNotes();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Suspense>
      <Layout style={"min-h-screen bg-base-200"}>
      <div className="container mx-auto px-4 py-8">
        <SectionHeader />
      </div>
      </Layout>
    </Suspense>
  );
}

export default Create;
