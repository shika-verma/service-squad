import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      serviceRequested,
      locationHub,
      isEmergency,
      message,
    } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required fields' },
        { status: 400 }
      );
    }

    // In production with SANITY_API_WRITE_TOKEN, this writes directly to Sanity:
    // await writeClient.create({
    //   _type: 'formSubmission',
    //   fullName,
    //   phone,
    //   email,
    //   serviceRequested,
    //   locationHub,
    //   isEmergency,
    //   message,
    //   status: 'new',
    //   createdAt: new Date().toISOString(),
    // });

    console.log('[LEAD DISPATCH RECEIVED]:', {
      fullName,
      phone,
      serviceRequested,
      locationHub,
      isEmergency,
      time: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Dispatch ticket queued successfully',
      data: {
        fullName,
        phone,
        serviceRequested,
        locationHub,
      },
    });
  } catch (error) {
    console.error('Error handling dispatch submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
