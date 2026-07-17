import React, { Suspense } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router";
import useCreateNotes from "../hooks/useCreateNotes";
import { ArrowLeftIcon } from "lucide-react";
import Form from "../components/form/Form";
import Label from "../components/Label/Label";
import Input from "../components/input/Input";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import BackButton from "../components/BackButton/BackButton";

function Create() {
  const { createNotes, formData, setFormData, isLoading } = useCreateNotes();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Suspense>
      <Layout style={"min-h-screen bg-base-200 px-2"}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <BackButton title="Back to Notes" link={"/"} />
            <div className="card bg-base-100">
              <div className="card-body">
                <SectionHeader title={"Create New Note"} />
                <Form onSubmitHandler={handleSubmit}>
                  <div className="form-controls mb-4">
                    <Label ref={"title"} label={"Title"} />
                    <Input
                      id={"title"}
                      type={"text"}
                      placeholder={"Note Title"}
                      value={formData.title}
                      style={"input input-bordered"}
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}

export default Create;
