import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';
import React from 'react';
// import Header from '@/app/components/header';

// export interface PageProps { }
export interface PageProps {
  params: { id: string };
}

// export default function Page({}: PageProps) {
//   return null;
export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
